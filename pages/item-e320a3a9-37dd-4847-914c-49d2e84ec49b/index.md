HAX works with any AI coding agent — Warp, Oz, Codex, Claude Code, and others. This page covers the two install paths and the golden path to a running site.

Install
-------

**Warp / Oz / any agent** — install the bundled interface skills that teach agents how to drive the `hax` CLI:

    hax skills install --all

**Claude Code** — add the PRAW marketplace and install the onboarding plugin:

    /plugin marketplace add haxtheweb/praw
    /plugin install hax-onboarding@haxtheweb

The PRAW marketplace ships three Claude Code plugins:

*   **hax-onboarding** — golden-path slash commands plus an auto-install hook that ensures the `hax` CLI is present
*   **hax-site-ops** — the site-operations skill and reference docs (the renamed ClaudeHAX plugin, which resolves the old name collision)
*   **openstax2hax** — OpenStax-to-HAX conversion, folded in unchanged

Golden path
-----------

From zero to a running HAX site:

    hax site my-hax-site --y --no-i
    cd my-hax-site && hax serve

Open the local URL printed by `hax serve` (http://localhost) in your browser to view your site.

For the developer-facing version of this guide, see the [AI integration section in the create repository README](https://github.com/haxtheweb/create#ai-integration).