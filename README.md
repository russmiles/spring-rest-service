# Atomist Default Spring REST Template

*Templates get you running and updated with best-practices, fast!*

The canonical Atomist-supplied Spring REST Microservice template. Project templates are used in code generation and maintenance across your microservices.

Currently a template can consist of three possible directories: 

* /project: Contains content that will be copied into generated projects. Filenames may contain variable references. The template language is Velocity.  Filenames are templates if they end with _.vm. This extension will be removed on template expansion.
* /templates: Velocity templates that will be processed explicitly by code. Never copied directly into user projects.
* /meta: Contains information used by the template system. Never copied into generated projects. Files include:

| Filename  | Content | Status |
| ------------- | ------------- | ------------- |
| description.txt  | Description of the template  | Required |
| parameters  | List of parameter names, one per line  | Optional |

See com.atomist.generate.TemplateBasedProjectTemplate in [generator-lib](https://github.com/atomisthq/generator-lib) project for more information.

## Customising Templates

Please fork these default, canonical templates for your own purposes! It's what they're here for.
