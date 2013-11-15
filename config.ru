# This file is used by Rack-based servers to start the application.

# Unicorn self-process killer
require 'unicorn_killer'
use UnicornKiller::MaxRequests, 10240 + Random.rand(10240)
use UnicornKiller::Oom, (96 + Random.rand(32)) * 1024**2

require ::File.expand_path('../config/environment',  __FILE__)
run Djpaul::Application
