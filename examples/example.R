#
# This file is just an example. I took it from the source one and
# edited to demonstrate the syntax highlighting. The code may
# not work or even should not.
#
# Original: https://github.com/rstudio/shiny/blob/master/R/app.R
# Copyright are held by original authors.
#

shinyApp <- function(ui=NULL, server=NULL, onStart=NULL, options=list(),
                     uiPattern="/", enableBookmarking=NULL) {
  if (is.null(server)) {
    stop("`server` missing from shinyApp")
  }

  uiPattern <- sprintf("^%s$", uiPattern)

  httpHandler <- uiHttpHandler(ui, uiPattern)

  serverFuncSource <- function() {
    server
  }

  if (!is.null(enableBookmarking)) {
    bookmarkStore <- match.arg(enableBookmarking, c("url", "server", "disable"))
    enableBookmarking(bookmarkStore)
  }

  shinyOptions(appDir = getwd())
  appOptions <- consumeAppOptions()

  structure(
    list(
      httpHandler = httpHandler,
      serverFuncSource = serverFuncSource,
      onStart = onStart,
      options = options,
      appOptions = appOptions
    ),
    class = "shiny.appobj"
  )
}

shinyAppDir <- function(appDir, options=list()) {
  if (!utils::file_test('-d', appDir)) {
    stop("No Shiny application exists at the path \"", appDir, "\"")
  }

  appDir <- normalizePath(appDir, mustWork = TRUE)

  if (file.exists.ci(appDir, "server.R")) {
    shinyAppDir_serverR(appDir, options = options)
  } else if (file.exists.ci(appDir, "app.R")) {
    shinyAppDir_appR("app.R", appDir, options = options)
  } else {
    stop("App dir must contain either app.R or server.R.")
  }
}
