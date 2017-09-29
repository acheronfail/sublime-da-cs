#
# This file is just an example. I took it from the source one and
# edited to demonstrate the syntax highlighting. The code may
# not work or even should not.
#
# Original: https://github.com/pallets/flask/blob/master/flask/ctx.py
# Copyright are held by original authors.
#


import sys
from functools import update_wrapper

from werkzeug.exceptions import HTTPException

from .globals import _request_ctx_stack, _app_ctx_stack
from .signals import appcontext_pushed, appcontext_popped
from ._compat import BROKEN_PYPY_CTXMGR_EXIT, reraise


_sentinel = object()


class _AppCtxGlobals(object):
    def get(self, name, default=None):
        return self.__dict__.get(name, default)

    def pop(self, name, default=_sentinel):
        if default is _sentinel:
            return self.__dict__.pop(name)
        else:
            return self.__dict__.pop(name, default)

    def setdefault(self, name, default=None):
        return self.__dict__.setdefault(name, default)

    def __contains__(self, item):
        return item in self.__dict__

    def __iter__(self):
        return iter(self.__dict__)

    def __repr__(self):
        top = _app_ctx_stack.top
        if top is not None:
            return '<flask.g of %r>' % top.app.name
        return object.__repr__(self)


def after_this_request(f):
    _request_ctx_stack.top._after_request_functions.append(f)
    return f


def copy_current_request_context(f):
    top = _request_ctx_stack.top
    if top is None:
        raise RuntimeError('This decorator can only be used at local scopes '
            'when a request context is on the stack.  For instance within '
            'view functions.')
    reqctx = top.copy()
    def wrapper(*args, **kwargs):
        with reqctx:
            return f(*args, **kwargs)
    return update_wrapper(wrapper, f)
