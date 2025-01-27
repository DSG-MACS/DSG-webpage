# Installation

Install `dblp2bibtex`. Instructions [here](https://github.com/robstewart57/dblp2bibtex)

# Generating a bibtex file

Run this:

    dblp2bibtex --listauthorfile=dsg-authors.txt

This will take about 30-60 minutes, because DBLP has a limit to the number of
HTTP requests that can be made.

# Deploying the bibtex

Copy the entire contents of the generated `export.bib` file into the 

    <pre id="bibtex">
    </pre>
    
block in `webpage/content/` in this git repository.

The `bib-publication-list` software will render this bibtex as an interactive
table on the "Publications" page on the DSG website.

# Build and deploy

Follow [these instructions](https://gitlab-student.macs.hw.ac.uk/as251/dsg-webpages/-/blob/main/README.md).

# Maintenance

Carry out this task to produce updated bibtex two or three times a year, to keep
the publications listed on the DSG website relatively up to date.
