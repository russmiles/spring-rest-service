# project-templates
Project templates used in code generation

Uses directory conventions for templates. The first layer of directories (such as "spring-boot") is the template type.

The next layer, such as "rest-service", represents a template name.

The final layer consists of three possible directories: 
* /project: Contains content that will be copied into generated projects. Filenames may contain variable references. The template language is Velocity.  Filenames are templates if they end with _.vm. This extension will be removed on template expansion.
* /templates: Velocity templates that will be processed explicitly by code. Never copied directly into user projects.
* /meta: Contains information used by the template system. Never copied into generated projects. Files:

| Filename  | Content | Status |
| ------------- | ------------- | ------------- |
| description.txt  | Description of the template  | Required |
| parameters  | List of parameter names, one per line  | Optional |

See com.atomist.generate.TemplateBasedProjectTemplate in generator-lib project.
