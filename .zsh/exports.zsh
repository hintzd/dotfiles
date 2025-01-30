export CPATH=/opt/homebrew/opt/llvm/include/c++/v1:$CPATH
export LIBRARY_PATH=/opt/homebrew/opt/llvm/lib:$LIBRARY_PATH
export CXX=/opt/homebrew/opt/llvm/bin/clang++
export CC=/opt/homebrew/opt/llvm/bin/clang
export CXXFLAGS="-stdlib=libc++ -I/opt/homebrew/opt/llvm/include/c++/v1"
export LDFLAGS="-L/opt/homebrew/opt/llvm/lib -Wl,-rpath,/opt/homebrew/opt/llvm/lib"
export CPPFLAGS="-I/opt/homebrew/opt/llvm/include"
export SDKROOT=$(xcrun --show-sdk-path)
export PATH="/opt/homebrew/opt/llvm/bin:$PATH"


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

