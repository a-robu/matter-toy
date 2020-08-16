FROM ubuntu:20.04

# Why are we installing these packages?
#   - python and pip are necessary for installing and running Jupyter
#   - curl is necessary for the healthcheck

# In a desperate attempt to make apt-get install quieter, we add the
# "-o=Dpkg::Use-Pty=0" flag, following instructions from this askubuntu
# page https://askubuntu.com/a/668859. This did not really help reduce
# the verbosity of the output.
RUN apt-get -qq update && \
    apt-get -qq install -o=Dpkg::Use-Pty=0 \
        nodejs npm python-is-python3 python3-pip curl && \
    rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm install

RUN python -m pip install jupyter

RUN npx ijsinstall

COPY notebooks /app/notebooks

# NOTE that it is possible to make jupyter notebook less verbose with
# the --log-level=CRITICAL flag.

CMD ["npx", "jupyter", "notebook", \
        "--allow-root", "--ip=0.0.0.0", "--port=8080", \
        "--NotebookApp.custom_display_url=http://localhost:8080", \
        "--NotebookApp.token=''", "--notebook-dir=/app/notebooks"]
