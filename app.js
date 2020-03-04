(() => {
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

  /**
   * Add or remove class off nav-link--active to nav bar links according to context and events
   *
   * When the page is loaded :
   *  - if the url do not contain hash, we add default active link to first link (default)
   *  - if the url contains a hash, we the off nav-link--active to the matching nav link
   * When a navlink is clicked :
   *  - remove class of nav-link--active from existing navlink
   *  - add class of nav-link--active to the clicked navlink
   */
  const manageActiveLink = (e) => {
    /**
     * Remove existing active link CSS class
     */
    const removeActiveLink = () => {
      const isCurrentNavLink = document.querySelector('.nav-link--active') || null
      isCurrentNavLink && isCurrentNavLink.classList.remove('nav-link--active')
    }
    /**
     * Add CSS class name of nav-link--active to element
     */
    const addActiveLink = element => element.classList.add('nav-link--active')
    /**
     * Working with load event
     */
    if (e.type === 'load') {
      removeActiveLink()
      // Ref all nav links
      const navlinks = Array.from(document.querySelectorAll('.nav-link'))
      // Ref current hash if any
      const isCurrentHash = e.target.location.hash || null
      if (!isCurrentHash) {
        // Add class of nav-link--active to first nav-link element
        addActiveLink(navlinks[0])
      } else {
        // Find nav link element with hash equality to location.hash
        const currentNavLink = navlinks.find(link => link.hash === isCurrentHash)
        // Add class of nav-link--active to matching navlink hash
        addActiveLink(currentNavLink)
      }
    }
    /**
     * Replace active link according to click event
     */
    if (e.type === 'click' && e.target.hash) {
      removeActiveLink()
      addActiveLink(e.target)
    }
  }
  window.addEventListener('load', manageActiveLink)
  document.querySelector('#nav-links').addEventListener('click', manageActiveLink)
})()
