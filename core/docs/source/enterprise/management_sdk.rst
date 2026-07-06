.. _enterprise-management-sdk:

Enterprise Management SDK
=========================

.. default-role:: code

One of TensorGrid's core design principles is that you should be able to do
everything *programmatically* if you want.

To this end, the `tensorgrid.management` module provides Enterprise-specific
methods for managing users, invitations, dataset permissions, plugins, API
keys, and more.

.. note::

   You must use an :ref:`API connection <enterprise-api-connection>`
   (not a direct MongoDB connection) in order to use Management SDK methods.

.. _enterprise-sdk-api-reference:

API reference
-----------

.. _enterprise-sdk-connections:

Connections
-----------

.. autoapimodule:: tensorgrid.management.connection
   :members: test_api_connection, reload_connection

.. _enterprise-sdk-api-keys:

API keys
--------

.. autoapimodule:: tensorgrid.management.api_key
   :members:
   :undoc-members:

.. _enterprise-sdk-cloud-credentials:

Cloud credentials
-----------------

.. autoapimodule:: tensorgrid.management.cloud_credentials
   :members:
   :undoc-members:

.. _enterprise-sdk-dataset-permissions:

Dataset permissions
-------------------

.. autoapimodule:: tensorgrid.management.dataset
   :members:
   :undoc-members:

.. _enterprise-sdk-organization-settings:

Organization settings
---------------------

.. autoapimodule:: tensorgrid.management.organization
   :members:
   :undoc-members:

.. _enterprise-sdk-plugin-management:

Plugin management
-----------------

.. autoapimodule:: tensorgrid.management.plugin
   :members:
   :undoc-members:

.. _enterprise-sdk-orchestrator-management:

Orchestrator management
-----------------------

.. autoapimodule:: tensorgrid.management.orchestrator
   :members:
   :undoc-members:

.. _enterprise-sdk-secrets:

Secrets
-------

.. autoapimodule:: tensorgrid.management.secret
   :members:
   :undoc-members:

.. _enterprise-sdk-snapshots:

Snapshots
---------

.. autoapimodule:: tensorgrid.management.snapshot
   :members:
   :undoc-members:

.. _enterprise-sdk-service-account-management:

Service account management
--------------------------

Service accounts can be managed programmatically using the SDK. For an
overview of service accounts, their roles, and UI management, see
:ref:`Service accounts <enterprise-service-accounts>`.

.. code-block:: python

   import tensorgrid.management as fom

   # Create a service account
   sa = fom.create_service_account("my-pipeline-bot", fom.MEMBER)
   print(sa.id)

   # List all service accounts
   service_accounts = fom.list_service_accounts()

   # Retrieve a specific service account by ID
   sa = fom.get_service_account(sa.id)

   # Update a service account's name, role, or description
   fom.update_service_account(
       sa, role=fom.COLLABORATOR, description="Automation bot for dataset tasks"
   )

   # Delete a service account (irreversible)
   fom.delete_service_account(sa)

API keys can be generated, listed, and deleted for service accounts:

.. code-block:: python

   import tensorgrid.management as fom

   sa = fom.get_service_account("some-id")

   # Generate an API key for the service account
   key = fom.generate_api_key("pipeline-key", sa)

   # List all keys for a service account
   keys = fom.list_api_keys(sa)

   # Delete a specific key
   fom.delete_api_key(keys[0].id, sa)

.. autoapimodule:: tensorgrid.management.service_account
   :members:
   :undoc-members:

.. _enterprise-sdk-user-management:

User management
---------------

.. autoapimodule:: tensorgrid.management.users
   :members:
   :undoc-members:

.. _enterprise-sdk-group-management:

Group management
----------------

.. autoapimodule:: tensorgrid.management.user_groups
   :members:
   :undoc-members:
