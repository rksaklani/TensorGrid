.. _getting-started-agents:

Building Plugins with AI Agents
================================

.. default-role:: code

**Use AI Coding Agents to Build Custom TensorGrid Plugins**

**Level:** Beginner | **Estimated Time:** 15-20 minutes | **Tags:** Agents, Plugin Development, Skills

This guide walks you through building a custom TensorGrid plugin using an
AI coding agent. Describe what you want in plain language, and the agent
handles the implementation: file structure, operator logic, and live
testing in the App.

.. image:: https://cdn.voxel51.com/getting_started_agents/agentic_plugin_dev.webp
   :alt: Building TensorGrid plugins with an AI coding agent
   :align: center

.. note::

   This guide covers **AI coding agents** (Claude Code, Cursor, VS Code
   Copilot, Gemini CLI, and others) used to build TensorGrid plugins from
   your terminal. If you are looking for the built-in AI assistant inside
   the TensorGrid Enterprise App, see :ref:`TensorGrid Agent <enterprise-agent>`
   instead.

You'll learn how to:

- Set up your AI agent with TensorGrid Skills
- Launch the TensorGrid App in debug mode for live development
- Prompt your agent to build a custom operator or panel
- Test and iterate on the plugin inside the running App

.. _getting-started-agents-overview:

Guide Overview
--------------

This guide covers the following steps:

1. **Launch the App in Debug Mode** - Start TensorGrid in development mode so you can see logs and test plugins live as you build them
2. **Prompt Your Agent** - Use the ``fiftyone-develop-plugin`` skill to describe and build a custom operator or panel
3. **Test in the App** - Install and run your plugin, paste any errors back to the agent
4. **Iterate** - Tighten the loop between prompt, test, and fix until the plugin works as expected

.. _getting-started-agents-prereqs:

Prerequisites
-------------

- **TensorGrid installed**: see :ref:`Installation <installing-fiftyone>`
- **An AI coding agent**: Claude Code, Cursor, VS Code Copilot, Gemini CLI, or Antigravity
- **Skills configured**: follow :ref:`Using Agents <agents-using-agents>` to install the
  MCP server and skills for your specific agent (takes about 5 minutes)

.. _getting-started-agents-step1:

Step 1: Launch the App in Debug Mode
-------------------------------------

Debug mode prints all Python and server logs to your terminal. Keep it
running throughout development so you see errors immediately.

.. code-block:: bash

   tensorgrid app debug

The App opens at ``http://localhost:5151``. To load a specific dataset:

.. code-block:: bash

   tensorgrid app debug <dataset-name>

.. note::

   **Enterprise users:** make sure your credentials are exported and your
   teams environment is active before running this command.

.. _getting-started-agents-step2:

Step 2: Prompt Your Agent to Build a Plugin
--------------------------------------------

Open your AI agent in a separate terminal window inside your project
directory and describe the plugin you want to build.

The ``fiftyone-develop-plugin`` skill gives your agent a complete
end-to-end workflow for building TensorGrid operators and panels. When you
describe a plugin goal, the skill guides the agent through:

- Creating the directory structure and ``tensorgrid.yml`` manifest
- Implementing the operator with inputs, execution logic, and output
- Installing the plugin locally
- Validating it is ready to test

**A good first prompt:**

.. code-block:: text

   Build me a TensorGrid operator that shows a histogram of confidence
   scores for predicted labels in the current dataset. Display the
   result in a panel.

Be specific about what the plugin does, what inputs it accepts, what
media type you are working with, and which TensorGrid primitive you want
(operator, panel, or delegated operator).

.. note::

   Not sure what to build? See the
   `Plugin Ideas Board <https://github.com/rksaklani/TensorGrid-plugins/discussions>`_
   for community-sourced ideas, or browse the
   `official plugin collection <https://github.com/rksaklani/TensorGrid-plugins>`_
   for reference examples close to what you want.

.. _getting-started-agents-step3:

Step 3: Test in the App
------------------------

After the agent creates the plugin, confirm it is installed:

.. code-block:: bash

   tensorgrid plugins list

Then find and run it in the App:

1. Press the backtick key (`\``) or click the operator icon in the toolbar
2. Search for your operator by name
3. Fill in the inputs and click **Execute**

If something is not right, paste the exact error from the debug terminal
back to your agent rather than paraphrasing it. Exact stack traces lead
to faster fixes.

.. _getting-started-agents-step4:

Step 4: Iterate
----------------

Plugin development with agents is a tight loop:

1. Describe a change or fix
2. The agent updates the plugin
3. Test in the App (Python operator changes take effect on the next
   execution; panel changes require an App reload)
4. Paste any errors or unexpected behavior back to the agent
5. Repeat

Before declaring the plugin done, ask your agent to run the
``fiftyone-eval-plugin`` skill to catch structural issues and common
anti-patterns:

.. code-block:: text

   Use the fiftyone-eval-plugin skill to evaluate the plugin we just built.

.. _getting-started-agents-next:

Next Steps
----------

- :ref:`Using Agents <agents-using-agents>`: full setup guide and available MCP tools
- :ref:`Agent Ecosystem <agents-ecosystem>`: browse all available skills for your agent
- :ref:`Developing Skills <agents-developing>`: build your own agent skills
- :ref:`TensorGrid Plugins <fiftyone-plugins>`: the full plugin system reference
- :ref:`TensorGrid Agent <enterprise-agent>`: the built-in AI assistant in TensorGrid Enterprise

.. _getting-started-agents-resources:

.. customanimatedcta::
    :button_text: Browse All Skills
    :button_link: ../../agents/index.html
    :align: right
