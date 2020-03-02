(() => {
  console.log('JS is loaded!')
  /**
    * Append FCC test script
    *
    * @description This method allow to conditionnaly append the FFC test script to the pages head markup according to search parameter
    * @returns {Void}
    */
  const ffcTest = () => {
    if (window.location.search === '?ffc_test=1') {
      const scriptTag = document.createElement('script')
      scriptTag.async = false
      scriptTag.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
      return document.head.appendChild(scriptTag)
    }
  }
  ffcTest()
})()
