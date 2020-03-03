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

  const currentNavLinkClass = (e) => {
    /**
     * Remove existing class existing name of nav-link--on
     */
    const removeCurrentNavLink = () => {
      const isCurrentNavLink = document.querySelector('.nav-link--on') || null
      isCurrentNavLink && isCurrentNavLink.classList.remove('nav-link--on')
    }
    /**
     * Add CSS class name of nav-link--on to element
     */
    const addClass = element => element.classList.add('nav-link--on')
    /**
     * Working with load event
     */
    if (e.type === 'load') {
      removeCurrentNavLink()
      // Ref all nav links
      const navlinks = Array.from(document.querySelectorAll('.nav-link'))
      // Ref current hash if any
      const isCurrentHash = e.target.location.hash || null
      if (!isCurrentHash) {
        // Add class of nav-link--on to first nav-link element
        addClass(navlinks[0])
      } else {
        // Find nav link element with hash equality to location.hash
        const currentNavLink = navlinks.find(link => link.hash === isCurrentHash)
        console.log() // !DEBUG
        // Add class of nav-link--on to matching navlink hash
        addClass(currentNavLink)
      }
    }
    /**
     * Working with navigation click event
     */
    if (e.type === 'click' && e.target.hash) {
      removeCurrentNavLink()
      addClass(e.target)
    }
  }
  window.addEventListener('load', currentNavLinkClass)
  document.querySelector('#nav-links').addEventListener('click', currentNavLinkClass)
})()
