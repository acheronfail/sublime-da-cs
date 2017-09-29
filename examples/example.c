/*
 * This file is just an example. I took it from the source one and
 * edited to demonstrate the syntax highlighting. The code may
 * not work or even should not.
 *
 * Original: https://github.com/git/git/blob/master/blame.c
 * Copyright are held by original authors.
 */

#include "tag.h"
#include "blame.h"

void blame_origin_decref(struct blame_origin *o)
{
  if (o && --o->refcnt <= 0) {
    struct blame_origin *p, *l = NULL;
    if (o->previous)
      blame_origin_decref(o->previous);
    free(o->file.ptr);
    for (p = o->commit->util; p; l = p, p = p->next) {
      if (p == o) {
        if (l)
          l->next = p->next;
        else
          o->commit->util = p->next;
        free(o);
        return;
      }
    }
    die("internal error in blame_origin_decref");
  }
}

static struct blame_origin *make_origin(struct commit *commit, const char *path)
{
  struct blame_origin *o;
  FLEX_ALLOC_STR(o, path, path);
  o->commit = commit;
  o->refcnt = 1;
  o->next = commit->util;
  commit->util = o;
  return o;
}

static struct blame_origin *get_origin(struct commit *commit, const char *path)
{
  struct blame_origin *o, *l;

  for (o = commit->util, l = NULL; o; l = o, o = o->next) {
    if (!strcmp(o->path, path)) {
      if (l) {
        l->next = o->next;
        o->next = commit->util;
        commit->util = o;
      }
      return blame_origin_incref(o);
    }
  }
  return make_origin(commit, path);
}
