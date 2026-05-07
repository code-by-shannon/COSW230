Migration from CodeSandbox to VS Code

Due to continued instability in CodeSandbox, the entire project was migrated into a local Vite React environment using Visual Studio Code.

Migration Process Included
Creating a new Vite React project locally
Downloading and extracting the CodeSandbox files
Copying project folders into the new Vite structure
Renaming multiple .js files to .jsx
Updating broken import paths
Installing missing dependencies such as react-icons
Resolving Vite JSX parsing errors
Fixing React portal issues related to the missing overlay div
Restarting and debugging the Vite dev server multiple times
Debugging and Lessons Learned

During the migration and optimization process, several React concepts became clearer:

React rerenders components frequently whenever state changes
useMemo() caches calculations based on dependency changes
memo() prevents unnecessary component rerenders
lazy() delays loading code until the component is actually needed
Suspense provides temporary fallback UI while lazy components load
Vite development behavior differs from production bundle behavior
Network tab inspection can be used to observe lazy-loaded chunks in real time
Final Outcome

The project was successfully migrated from CodeSandbox into a stable local Vite environment and the optimization techniques required by the assignment were implemented and tested successfully.

In addition to completing the assignment requirements, this project became a valuable exercise in:

React debugging
local environment setup
dependency management
JSX migration
import resolution
component optimization
DevTools and Network tab analysis

Special thanks to the raccoons who supervised the debugging process from the electrical substation.
