# PATH

if [[ ":$PATH:" != *":/opt/homebrew/bin:"* ]]; then
    export PATH="/opt/homebrew/bin:$PATH"
fi

if [[ ":$PATH:" != *":/opt/homebrew/Cellar/graphviz/11.0.0/bin:"* ]]; then
    export PATH="/opt/homebrew/Cellar/graphviz/11.0.0/bin:$PATH"
fi

#export PATH="$PATH:/Applications/RStudio.app/Contents/Resources/app/quarto/bin/quarto"
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

