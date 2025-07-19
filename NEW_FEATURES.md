# New Features and Documentation

This document summarizes the new features and documentation introduced in this branch. The primary focus of this update is to provide comprehensive documentation for the Gemini CLI, covering its architecture, usage, and development.

This document will walk you through the newly added documentation, providing a summary of each section to help you quickly understand the new information available.

## Main Documentation (`docs/index.md`)

The main documentation page provides a high-level overview of the Gemini CLI. It introduces the tool's capabilities and provides a roadmap for navigating the documentation. Key sections include:

*   **Overview:** A brief introduction to the Gemini CLI and its components.
*   **Navigating the documentation:** A guide to the different sections of the documentation, including CLI usage, core details, and tools.
*   **Contributing & Development:** Information for developers who want to contribute to the project.
*   **Troubleshooting:** A guide to solving common problems.

## CLI Documentation (`docs/cli/index.md`)

The CLI documentation provides a detailed guide to using the `packages/cli` frontend. It covers the following topics:

*   **Authentication:** How to set up authentication with Google's AI services.
*   **Commands:** A reference for all available CLI commands.
*   **Configuration:** How to customize the CLI's behavior.
*   **Token Caching:** How to optimize API costs by caching tokens.
*   **Themes:** How to customize the appearance of the CLI.
*   **Tutorials:** A step-by-step guide to using the CLI for a development task.
*   **Non-interactive mode:** How to use the CLI in scripts and automated workflows.

## Core Documentation (`docs/core/index.md`)

The core documentation explains the `packages/core` backend of the Gemini CLI. It details the following:

*   **Role of the core:** The core's responsibilities, including interacting with the Gemini API, managing tools, and handling prompts.
*   **Security considerations:** How the core manages API keys and executes tools securely.
*   **Chat history compression:** How the core compresses chat history to avoid exceeding token limits.
*   **Model fallback:** How the core automatically switches to a fallback model if the primary model is unavailable.
*   **File discovery service:** How the core finds relevant files in your project.
*   **Memory discovery service:** How the core loads `GEMINI.md` files to provide context to the model.

## Tools Documentation (`docs/tools/index.md`)

The tools documentation provides an overview of the built-in tools that the Gemini model can use to interact with your local environment. It covers:

*   **Overview of Gemini CLI tools:** How tools work and how they enhance the CLI's capabilities.
*   **How to use Gemini CLI tools:** The process of how the model uses tools to respond to your prompts.
*   **Security and confirmation:** The safeguards in place to prevent tools from performing unintended actions.
*   **Available tools:** A list of the available tools, including file system tools, a shell tool, a web fetch tool, and more.
