# functions

pball() {
    find "$1" -type f -print0 | xargs -0 -I {} sh -c 'echo "\n>>> {}" && cat "{}"' | pbcopy
}
# check if function exits
fex() {
    if typeset -f "$1" > /dev/null; then
        echo "✅ Function '$1' exists."
        eval "$1" "$2" 2>&1 | sed "s/^/⚠️  Error: /"
    elif type "$1" > /dev/null 2>&1; then
        echo "🔹 '$1' is a built-in command or an external executable."
    else
        echo "⚠️  Function or command '$1' does not exist."
        return 1
    fi
}

clp() {
    cat "$1" | pbcopy
}

venv() {
    local pre_path=$(realpath ~/.venvs/$1)
    local post_path="bin/activate"
    local new_full_path="$pre_path/$post_path"
    
    # Debugging
    #echo $1
    #echo "Pre-resolved path: ~/.venvs/$1"
    #echo "Resolved pre_path: $pre_path"
    #echo "Post path: $post_path"
    #echo "Full path: $new_full_path"
    
    source "$new_full_path"
}

mkvenv() {
    if [ "$#" -ne 1 ]; then
        echo "Usage: mkenv /localfilepath/project1"
        return 1
    fi
    
    # Ensure the specified directory exists
    mkdir -p "$1"

    venv_hmdr="${HOME}/.venvs"
    local project_path=$(realpath $1)
    local project_name=$(basename "$project_path")
    local venv_name="${project_name}_venv"
    local venv_path="${project_path}/${venv_name}"
    local link_source=$venv_path
    local link_target="${HOME}/.venvs/${venv_name}" 

    # Debugging 
    #echo "project_path: $project_path"
    #echo "project_name: $project_name"
    #echo "venv_name: $venv_name"
    #echo "venv_path: $venv_path"
    #echo "venvs Home Directory: $venv_hmdr"
    #echo "link_source: $link_source"
    #echo "link_target: $link_target"
    
    # Create the virtual environment in the specified project directory
    python3 -m venv "$venv_path"

    # Ensure ~/.venvs directory exists
    mkdir -p $venv_hmdr

    # Remove any existing symbolic link to avoid conflicts
    rm -f "$link_target"

    # Create a symbolic link in ~/.venvs pointing to the correct virtual environment directory
    ln -s $link_source $link_target

    #echo "Virtual environment created at: $venv_path"
    echo "Symbolic link created at: $link_target"
}



greet () {
  local name=${1:-world}
  echo "Hello, $name!"
}

vf () {
  vim -c "fern ."
}
qq () {
  quarto preview --no-browser --no-watch-inputs --port 4444
}

ipa () {
    alias python="ipython"
}

ipu () {
    unalias python
}

rst() {
    rstudio_path="/Applications/RStudio.app/Contents/MacOS/RStudio"

    if [[ "$1" == "-i" ]]; then
        case "$2" in
            e)
                if [ $# -eq 2 ]; then
                    # '-i e' with no file, bring existing RStudio to front
                    osascript -e 'tell application "RStudio" to activate'
                else
                    # '-i e' with a file, open file in existing instance of RStudio
                    osascript -e 'tell application "RStudio" to activate'
                    (nohup $rstudio_path "${@:3}" >/dev/null 2>&1 &)
                fi
                ;;
            *)
                echo "Invalid option for -i. Use 'e' for existing instance."
                ;;
        esac
    else
        if [ $# -eq 0 ]; then
            # No flags, just open RStudio
            open -na RStudio
        else
            # Open file in existing instance of RStudio by default
            osascript -e 'tell application "RStudio" to activate'
            (nohup $rstudio_path "$1" >/dev/null 2>&1 &)
        fi
    fi
}


chrm() {
    case "$1" in
        -r|--recent)
            # Assuming your projects are in ~/Projects or another common directory
            # and you want to open the most recently modified one
            RECENT_PROJECT=$(ls -t ~/Projects | head -n1)
            charm "~/Projects/$RECENT_PROJECT"
            ;;

        -p|--new-project)
            # Create a new directory and open it as a project
            # Ensure the directory name is provided
            if [ -z "$2" ]; then
                echo "Please specify a project name."
                return 1
            fi
            mkdir -p "$2"
            charm "$2"
            ;;

        -n|--new)
            # Create a new file and open it
            # Ensure the file name is provided
            if [ -z "$2" ]; then
                echo "Please specify a filename."
                return 1
            fi
            touch "$2"
            charm "$2"
            ;;

        *)
            charm "$@"
            ;;
    esac
}


ref() {
    STORAGE_FILE="$HOME/.my_strings.txt"

    if [ "$1" = "add" ] && [ -n "$2" ]; then
        # Add string to storage
        echo "$2" >> $STORAGE_FILE
    elif [ "$1" = "get" ]; then
        if [ -n "$2" ]; then
            # Get specific line
            sed -n "${2}p" $STORAGE_FILE
        else
            # List all strings with their line numbers
            nl $STORAGE_FILE
        fi
    elif [ "$1" = "remove" ] && [ -n "$2" ]; then
        # Remove specific line
        sed -i "" "${2}d" $STORAGE_FILE
    else
        echo "Invalid usage. Use: manage_strings add <string> or manage_strings get [line_number] or manage_strings remove [line_number]"
    fi
}


calc() {
    local operation="$1"
    local scale="${2:-2}"  # Default scale is 2 if not provided

    echo "scale=$scale; $operation" | bc
}

# count the number of base pairs
bp() {
    local total=0

    if [ "$#" -eq 0 ]; then
        echo "Please provide at least one FASTA file or directory path as an argument."
        return 1
    fi

    # If the provided argument is a directory, list all .fasta files from it.
    if [ -d "$1" ]; then
        set -- "$1"/*.fasta
    fi

    for fasta in "$@"; do
        if [ ! -f "$fasta" ]; then
            echo "Warning: File '$fasta' not found. Skipping..."
            continue
        fi
        local count=$(grep -v "^>" "$fasta" | tr -d '\n' | wc -c)
        total=$((total + count))
    done

    echo "Total base pairs across all provided files: $total"
}

# Extact text wrapped in either "" or '' from clipbaord and return result to clipboard
quo() {
    # Extract paths within single quotes
    local single_quoted=$(pbpaste | grep -oE "'[^']*'")
    # Extract paths within double quotes
    local double_quoted=$(pbpaste | grep -oE '"[^"]*"')
    # Combine results and copy to clipboard
    echo "${single_quoted}${double_quoted}" | pbcopy
}


foo() {
    local bar=${1:-hello}
    echo "Parameter #1 is $bar"
}

rsc() {
  if [[ -f $1 ]]; then
    SCRIPT_PATH=$(readlink -f $1)
    open -n -a RStudio "$SCRIPT_PATH"
  else
    echo "File not found: $1"
  fi
}

sc() {
    nocorrect history | grep --only-matching "${1}.*" | sort --unique
}

rproj() {
   unsetopt CORRECT

   if [ -z "$1" ]
   then
      echo "No argument supplied. Please provide a project name, ie Proj_1."
      return 1
   fi

   proj_file="$1"
   title="${1//_ /}"
   template_rmd="/Users/danielhintz/Dropbox/R_triggers/rproj_shell_template.Rmd"
   insert_template=true

   n_flag_value=$3

   if [ "$2" = "-n" ]
   then
      shift
      shift
   fi

   echo "Flag -n received: $n_flag_value"

   # Handle the -n flag
   case "${n_flag_value:-T}" in
      y|Yes|yes|T|TRUE|true) insert_template=true ;;
      n|No|no|F|FALSE|false) insert_template=false ;;
      *) echo "Invalid option for -n flag. Defaulting to TRUE." ;;
   esac

   Rscript  -e "usethis::create_project('$proj_file') ; usethis::proj_set('$proj_file'); usethis::use_rstudio()"

   if [ -d "${PWD}/${proj_file}/R" ]
   then
      rmdir "${PWD}/${proj_file}/R"
   fi

   if $insert_template
   then
      # Create .Rmd file
      cp "${template_rmd}" "${PWD}/${proj_file}/${proj_file}.Rmd"

      # Replace placeholder with the actual title
      sed -i.bak "s/__TITLE__/${title//_/ }/g" "${PWD}/${proj_file}/${proj_file}.Rmd"
      rm -f "${PWD}/${proj_file}/${proj_file}.Rmd.bak"
   fi

   # Open .Rproj
   if [ -f "${PWD}/${proj_file}/${proj_file}.Rproj" ]
   then
      open "${PWD}/${proj_file}/${proj_file}.Rproj"
   else
      echo "File ${PWD}/${proj_file}/${proj_file}.Rproj does not exist."
   fi
}

rmd() {
   unsetopt CORRECT

   if [ -z "$1" ]
   then
      echo "No argument supplied. Please provide a file name, ie file_1."
      return 1
   fi

   file_name="$1"
   title="${1//_ /}"
   template_rmd="/Users/danielhintz/Dropbox/R_triggers/rproj_shell_template.Rmd"

   # Check if the template file exists
   if [ ! -f "${template_rmd}" ]
   then
      echo "Template file ${template_rmd} does not exist."
      return 1
   fi

   # Create .Rmd file
   cp "${template_rmd}" "${PWD}/${file_name}.Rmd"

   # Replace placeholder with the actual title
   sed -i.bak "s/__TITLE__/${title//_/ }/g" "${PWD}/${file_name}.Rmd"
   rm -f "${PWD}/${file_name}.Rmd.bak"

   # Check if the .Rmd file was created successfully
   if [ -f "${PWD}/${file_name}.Rmd" ]
   then
      # Open the .Rmd file
      open "${PWD}/${file_name}.Rmd"
   else
      echo "File ${PWD}/${file_name}.Rmd could not be created."
   fi
}


crmd() {
   (
      title="$1"
      template_rmd="/Users/danielhintz/Dropbox/R_triggers/rproj_shell_template.Rmd"

      # Create a temporary file
      temp_file=$(mktemp)

      # Replace placeholder with the actual title
      sed "s/__TITLE__/${title//_/ }/g" "${template_rmd}" > "${temp_file}"

      # Copy the edited content to the clipboard (macOS)
      pbcopy < "${temp_file}"

      # Remove the temporary file
      rm -f "${temp_file}"
   ) >/dev/null 2>&1
}

rename_files() {
  search_string="$1"
  replace_string="$2"

  find . -depth -name "*${search_string}*" -execdir sh -c 'mv "$1" "${1//'"${search_string}"'/'"${replace_string}"'}"' sh {} \;
}

rename_all() {
  search_string="$1"
  replace_string="$2"

  # Renames files containing the search string
  find . -depth -name "*${search_string}*" -execdir sh -c 'mv "$1" "${1//'"${search_string}"'/'"${replace_string}"'}"' sh {} \;

  # Replaces the search string with the replace string inside files
  find . -type f -exec sed -i '' -e 's/'"${search_string}"'/'"${replace_string}"'/g' {} +
}

rename_file_contents() {
  search_string="$1"
  replace_string="$2"

  # Replaces the search string with the replace string inside files
  find . -type f -exec sed -i '' -e 's/'"${search_string}"'/'"${replace_string}"'/g' {} +
}


baz() {
 echo "parameter #1 is $1"
}

ch() {
 local foo=${1:-git}
 history | grep --only-matching "$foo.*" | sort --unique
}

ext() {
  local foo=${1:-1}
  local bar=${2:-.Rproj}
  local thud=${3:-/Users/danielhintz/Dropbox}
  find "$thud" -atime -$foo -type f -name "*$bar"
}
# for example
# ext 30 .pdf /Users/danielhintz/Dropbox/UNI/s15/STAT_THEORY
# look for a .pdf file edited in the last 30 days in STAT_THEORY folder


rp() {
  local bar=${1:-1}
  find "/Users/danielhintz/Dropbox" -atime -$bar -type f -name "*.Rproj"
}
