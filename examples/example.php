<?php

//
// This file is just an example. I took it from the source one and
// edited to demonstrate the syntax highlighting. The code may
// not work or even should not.
//
// Original: https://github.com/laravel/framework/blob/5.5/src/Illuminate/Bus/Dispatcher.php
// Copyright are held by original authors.
//

namespace Illuminate\Bus;

use Closure;
use RuntimeException;

class Dispatcher implements QueueingDispatcher
{
    protected $container;

    protected $pipeline;

    protected $queueResolver;

    public function __construct(Container $container, Closure $queueResolver = null)
    {
        $this->container = $container;
        $this->queueResolver = $queueResolver;
        $this->pipeline = new Pipeline($container);
    }

    public function dispatch($command)
    {
        if ($this->queueResolver && $this->commandShouldBeQueued($command)) {
            return $this->dispatchToQueue($command);
        } else {
            return $this->dispatchNow($command);
        }
    }

    public function dispatchNow($command, $handler = null)
    {
        if ($handler || $handler = $this->getCommandHandler($command)) {
            $callback = function ($command) use ($handler) {
                return $handler->handle($command);
            };
        } else {
            $callback = function ($command) {
                return $this->container->call([$command, 'handle']);
            };
        }

        return $this->pipeline->send($command)->through($this->pipes)->then($callback);
    }

    public function hasCommandHandler($command)
    {
        return array_key_exists(get_class($command), $this->handlers);
    }

    public function getCommandHandler($command)
    {
        if ($this->hasCommandHandler($command)) {
            return $this->container->make($this->handlers[get_class($command)]);
        }

        return false;
    }

    protected function commandShouldBeQueued($command)
    {
        return $command instanceof ShouldQueue;
    }

    public function dispatchToQueue($command)
    {
        $connection = $command->connection ?? null;

        $queue = call_user_func($this->queueResolver, $connection);

        if (! $queue instanceof Queue) {
            throw new RuntimeException('Queue resolver did not return a Queue implementation.');
        }

        if (method_exists($command, 'queue')) {
            return $command->queue($queue, $command);
        } else {
            return $this->pushCommandToQueue($queue, $command);
        }
    }
}