//
// This file is just an example. I took it from the source one and
// edited to demonstrate the syntax highlighting. The code may
// not work or even should not.
//
// Original: https://github.com/moby/moby/blob/master/container/container.go
// Copyright are held by original authors.
//

package container

import (
    "bytes"
    "fmt"
    "io"
)

const configFileName = "config.v2.json"

const (
    DefaultStopTimeout = 10
)

func NewBaseContainer(id, root string) *Container {
    return &Container{
        ID:            id,
        State:         NewState(),
        ExecCommands:  exec.NewStore(),
        Root:          root,
        MountPoints:   make(map[string]*volume.MountPoint),
        StreamConfig:  stream.NewConfig(),
        attachContext: &attachContext{},
    }
}

func (container *Container) FromDisk() error {
    pth, err := container.ConfigPath()
    if err != nil {
        return err
    }

    jsonSource, err := os.Open(pth)
    if err != nil {
        return err
    }
    defer jsonSource.Close()

    dec := json.NewDecoder(jsonSource)

    if err := dec.Decode(container); err != nil {
        return err
    }

    if container.Platform == "" {
        container.Platform = runtime.GOOS
    }

    return container.readHostConfig()
}
