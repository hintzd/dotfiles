export PATH=$HOME/.npm-global/bin:$PATH


export PATH="/opt/homebrew/opt/openjdk/bin:$PATH"

# export CPATH=/opt/homebrew/opt/llvm/include/c++/v1:$CPATH
# export LIBRARY_PATH=/opt/homebrew/opt/llvm/lib:$LIBRARY_PATH
# export CXX=/opt/homebrew/opt/llvm/bin/clang++
# export CC=/opt/homebrew/opt/llvm/bin/clang
# export CXXFLAGS="-stdlib=libc++ -I/opt/homebrew/opt/llvm/include/c++/v1"
# export LDFLAGS="-L/opt/homebrew/opt/llvm/lib -Wl,-rpath,/opt/homebrew/opt/llvm/lib"
# export CPPFLAGS="-I/opt/homebrew/opt/llvm/include"
# export SDKROOT=$(xcrun --show-sdk-path)
# export PATH="/opt/homebrew/opt/llvm/bin:$PATH"


# old
# Set correct compilers
#export CC=/usr/bin/clang
#export CXX=/usr/bin/clang++
#export CPLUS_INCLUDE_PATH=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
#export C_INCLUDE_PATH=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include

# LLVM (Homebrew)
#export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
#export LDFLAGS="-L/opt/homebrew/opt/llvm/lib $LDFLAGS"
#export CPPFLAGS="-I/opt/homebrew/opt/llvm/include $CPPFLAGS"
#export CXXFLAGS="-stdlib=libc++"


export CONFIG_DIR="$HOME/.config"
# Other dependencies
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/shims:$PATH"
export EDITOR=nvim
export VISUAL=nvim

# bzip2
export PATH="/opt/homebrew/opt/bzip2/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/bzip2/lib $LDFLAGS"
export CPPFLAGS="-I/opt/homebrew/opt/bzip2/include $CPPFLAGS"

# Tcl-Tk
export PATH="/opt/homebrew/opt/tcl-tk/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/tcl-tk/lib $LDFLAGS"
export CPPFLAGS="-I/opt/homebrew/opt/tcl-tk/include $CPPFLAGS"

# OpenSSL
export PATH="/opt/homebrew/opt/openssl@1.1/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib $LDFLAGS"
export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include $CPPFLAGS"

# Python 3.10
export PATH="/opt/homebrew/opt/python@3.10/bin:$PATH"

export SDKROOT=$(xcrun --sdk macosx --show-sdk-path)
export CPATH=$(xcrun --sdk macosx --show-sdk-path)/usr/include/
export LIBRARY_PATH="$LIBRARY_PATH:$(xcrun --sdk macosx --show-sdk-path)/usr/lib"

if [[ ":$PATH:" != *":/opt/homebrew/bin:"* ]]; then
    export PATH="/opt/homebrew/bin:$PATH"
fi

if [[ ":$PATH:" != *":/opt/homebrew/Cellar/graphviz/11.0.0/bin:"* ]]; then
    export PATH="/opt/homebrew/Cellar/graphviz/11.0.0/bin:$PATH"
fi

if [[ ":$PATH:" != *":/Applications/RStudio.app/Contents/Resources/app/quarto/bin:"* ]]; then
    export PATH="/Applications/RStudio.app/Contents/Resources/app/quarto/bin:$PATH"
fi

if [[ ":$PATH:" != *":$HOME/bin:"* ]]; then
    export PATH="$PATH:$HOME/bin"
fi

if [[ ":$PATH:" != *":$HOME/scripts:"* ]]; then
    export PATH="$PATH:$HOME/scripts"
fi

if [[ ":$PATH:" != *":/Users/danielhintz/bioinformatics/ncbi-blast-2.15.0+/bin:"* ]]; then
    export PATH="$PATH:/Users/danielhintz/bioinformatics/ncbi-blast-2.15.0+/bin"
fi

if [[ ":$PATH:" != *":/Applications/RStudio.app/Contents/MacOS:"* ]]; then
    export PATH="$PATH:/Applications/RStudio.app/Contents/MacOS"
fi

if [[ ":$PATH:" != *":/System/Volumes/Data/opt/homebrew/Caskroom/warp:"* ]]; then
    export PATH="$PATH:/System/Volumes/Data/opt/homebrew/Caskroom/warp"
fi

# Ensure /usr/local/bin is first in $PATH
if [[ ":$PATH:" != *":/usr/local/bin:"* ]]; then
    export PATH="/usr/local/bin:$PATH"
fi



