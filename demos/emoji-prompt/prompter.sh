#!/bin/bash

function PROMPTER() {
    # CUTPWD=$(python3 -c "L=10;d='`pwd`';print(('...' if len(d) > L else '')+'`pwd`'[-L:])")
    export PS1=`get_emoji.py`" "$(echo -e "\e[1;30m`hyper_pwd.py`\e[0m ")
    # export PS1=`get_emoji.py`" " 
    # PS1=$RANDOM
}

export PROMPT_COMMAND=PROMPTER
