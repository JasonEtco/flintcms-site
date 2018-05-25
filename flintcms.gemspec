# encoding: utf-8

Gem::Specification.new do |s|
  s.name          = 'FlintCMS'
  s.version       = '0.0.1'
  s.authors       = ['Jason Etcovitch']
  s.homepage      = 'https://github.com/JasonEtco/flintcms-site'
  s.summary       = 'FlintCMS'

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md)|$)))}i)
  end

  s.platform      = Gem::Platform::RUBY
  s.license       = 'None'

  s.add_dependency 'jekyll', '~> 3.3'
end
