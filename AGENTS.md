<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep venue photography in a shared photo catalogue using the user's external image URLs when supplied, so reused pictures stay consistent across pages.
- Preserve existing attraction photos when no uploaded image depicts that attraction, to avoid misrepresenting rides.
- Categorize gallery photos in the shared photo catalogue and derive game filters and missing-category fallbacks from the attraction catalogue so all games stay represented.
- Render shared branch hover/tap maps in a viewport-positioned body portal so scrolling rows and animated ancestors cannot clip them.
