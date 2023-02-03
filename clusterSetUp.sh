# install homebrew at goinfre
cd $HOME/goinfre
git clone --depth=1 https://github.com/Homebrew/brew.git && echo 'export PATH=$HOME/goinfre/brew/bin:$PATH' >> $HOME/.zshrc && source $HOME/.zshrc
rm -fr $HOME/Library/Caches
brew update

#install ncdu
brew install ncdu

#install node.js && npm
brew install node
node --version
npm --version

#npm install react-bootstrap bootstrap
