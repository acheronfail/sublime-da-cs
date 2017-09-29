#
# This file is just an example. I took it from the source one and
# edited to demonstrate the syntax highlighting. The code may
# not work or even should not.
#
# Original: https://github.com/jekyll/jekyll/blob/master/lib/jekyll/site.rb
# Copyright are held by original authors.
#

require "csv"

module Jekyll
  class Site
    attr_reader   :source, :dest, :config
    attr_accessor :layouts, :pages, :static_files, :drafts,
                  :exclude, :include, :lsi, :highlighter, :permalink_style,
                  :time, :future, :unpublished, :safe, :plugins, :limit_posts,
                  :show_drafts, :keep_files, :baseurl, :data, :file_read_opts,
                  :gems, :plugin_manager, :theme

    attr_accessor :converters, :generators, :reader
    attr_reader   :regenerator, :liquid_renderer, :includes_load_paths

    def initialize(config)
      @source          = File.expand_path(config["source"]).freeze
      @dest            = File.expand_path(config["destination"]).freeze

      self.config = config

      @reader          = Reader.new(self)
      @regenerator     = Regenerator.new(self)
      @liquid_renderer = LiquidRenderer.new(self)

      Jekyll.sites << self

      reset
      setup

      Jekyll::Hooks.trigger :site, :after_init, self
    end

    def config=(config)
      @config = config.clone

      %w(safe lsi highlighter baseurl exclude include future unpublished
        show_drafts limit_posts keep_files).each do |opt|
        self.send("#{opt}=", config[opt])
      end

      self.gems = config["plugins"]

      configure_plugins
      configure_theme
      configure_include_paths
      configure_file_read_opts

      self.permalink_style = config["permalink"].to_sym

      @config
    end

    def process
      reset
      read
      generate
      render
      cleanup
      write
      print_stats if config["profile"]
    end

    def print_stats
      puts @liquid_renderer.stats_table
    end

    def reset
      self.time = if config["time"]
                    Utils.parse_date(config["time"].to_s, "Invalid time in _config.yml.")
                  else
                    Time.now
                  end
      self.layouts = {}
      self.pages = []
      self.static_files = []
      self.data = {}
      @collections = nil
      @regenerator.clear_cache
      @liquid_renderer.reset

      if limit_posts < 0
        raise ArgumentError, "limit_posts must be a non-negative number"
      end

      Jekyll::Hooks.trigger :site, :after_reset, self
    end
  end
end