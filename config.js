module.exports = {
  brewtap: [
    'blacknon/lssh',
  ],
  brew: [
    'bat',              // alternative to `cat`: https://github.com/sharkdp/bat
    'coreutils',        // upgrade grep so we can get things like inverted match (-v)
    'grep --with-default-names',
    'vim --with-client-server --with-override-system-vi',
    'lsd',              //https://github.com/Peltoche/lsd
    'autojump',         //https://github.com/wting/autojump
    'yarn',
    'asciinema',
    'lssh',
    'hub',
    'tree',
    'hadolint',         //https://github.com/hadolint/hadolint
    'gnebbia/kb/kb',
    'dust',
    'bit',              //https://github.com/chriswalz/bit
    'youtube-dl',
    'docker',
  ],
  cask: [
    'firefox',
    'brave-browser',
    'google-chrome',
    'iterm2',
    'sourcetree',
    'visual-studio-code',
    'slack',
    'clipy',
    'alfred',
    'android-studio',
    'android-platform-tools',
    'intellij-idea',
    'discord',
    'mounty',
    'postman',
    'telegram',
    'vlc',
  ],
  gem: [
    'mdless',
  ],
  npm: [
    'prettyjson',
    'vtop',
    'tldr',  //https://tldr.sh/
  ]
};
