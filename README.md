# project-templates
Project templates used in generation

Uses directory conventions for templates. The first layer of directories (such as "spring-boot") is the template type.

The next layer, such as "web-app", represents template name.

The final layer consists of two: /static for static content, and /templates for template content (using Velocity). See com.sforzando.generate.TemplateBasedProjectTemplate in introspector-lib project.
