#Namaste React


#Parcel
- Dev Build
- Local Srver
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove uncessary code
- Different dev and prod bundles


# React Hooks
(Normal JS functions)

1. useState()
- useState() superpowerful state to create state variable.
2. useEffect()


# https://github.com/acdlite/react-fiber-architecture



# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- will create a Slice (cartSlice)
- dispatch(action)
- Selector


# command
rd /s /q .parcel-cache
rd /s /q dist

# Type of Testing
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing.


# Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- To run command npm run test
- Jest configuration (npx jest --init)
- Install jsdom library
- Install@babel/preset-react  - to make JSX work in test cases.
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom