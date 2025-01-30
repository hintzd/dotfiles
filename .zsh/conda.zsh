if [[ -z $CONDA_DEFAULT_ENV ]]; then
        else
        export PATH=$CONDA_PREFIX/bin:$PATH
        fi

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/danielhintz/miniforge3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/danielhintz/miniforge3/etc/profile.d/conda.sh" ]; then
        . "/Users/danielhintz/miniforge3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/danielhintz/miniforge3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
