/*
 * This file is just an example. I took it from the source one and
 * edited to demonstrate the syntax highlighting. The code may
 * not work or even should not.
 *
 * Original: https://github.com/angular/angular/blob/master/aio/src/app/app.component.ts
 * Copyright are held by original authors.
 */

import { Component, ElementRef, HostBinding, HostListener, OnInit,
         QueryList, ViewChild, ViewChildren } from '@angular/core';

const sideNavView = 'SideNav';

@Component({
  selector: 'aio-shell',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  currentDocument: DocumentContents;
  currentDocVersion: NavigationNode;
  currentNodes: CurrentNodes;
  currentPath: string;
  dtOn = false;

  @HostBinding('class')
  hostClasses = '';

  private isFetchingTimeout: any;
  private isSideNavDoc = false;

  private sideBySideWidth = 992;
  sideNavNodes: NavigationNode[];

  private showFloatingToc = new BehaviorSubject(false);

  get homeImageUrl() {
    return this.isSideBySide ?
      'assets/images/logos/angular/logo-nav@2x.png' :
      'assets/images/logos/angular/shield-large.svg';
  }
  get isOpened() { return this.isSideBySide && this.isSideNavDoc; }
  get mode() { return this.isSideBySide ? 'side' : 'over'; }

  @ViewChild(DocViewerComponent, { read: ElementRef })
  docViewer: ElementRef;

  constructor(
    public deployment: Deployment,
    private documentService: DocumentService
  ) { }

  ngOnInit() {
    if ('Worker' in window) {
      this.searchService.initWorker('app/search/search-worker.js', 2000);
    }

    this.onResize(window.innerWidth);

    this.documentService.currentDocument.subscribe(doc => {
      this.currentDocument = doc;
      this.setPageId(doc.id);
      this.setFolderId(doc.id);
      this.updateHostClasses();
    });

    this.locationService.currentPath.subscribe(path => {
      if (this.deployment.mode !== 'stable' && !/^(docs$|api|guide|tutorial)/.test(path)) {
        this.locationService.replace('docs');
      }
      if (path === this.currentPath) {
        this.autoScroll();
      } else {
        this.currentPath = path;
        clearTimeout(this.isFetchingTimeout);
        this.isFetchingTimeout = setTimeout(() => this.isFetching = true, 200);
      }
    });
  }
}