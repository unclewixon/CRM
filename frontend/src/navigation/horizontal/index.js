/*

NOTE: tag is not supported in horizontal menu

Array of object

Top level object can be:
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- nav Grp (top level grp is called header group) ---/

title
icon (if it's on top/second level)
children

/--- nav Item (top level item is called header link) ---/

icon (if it's on top/second level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)

*/
// eslint-disable-next-line no-unused-vars
import dashboard from './dashboard'
// eslint-disable-next-line no-unused-vars
import apps from './apps'
// eslint-disable-next-line no-unused-vars
import pages from './pages'
// eslint-disable-next-line no-unused-vars
import chartsAndMaps from './charts-and-maps'
// eslint-disable-next-line no-unused-vars
import uiElements from './ui-elements'
// eslint-disable-next-line no-unused-vars
import formAndTable from './forms-and-table'
// eslint-disable-next-line no-unused-vars
import others from './others'

// Array of sections
// export default [...apps, ...dashboard, ...appsAndPages, ...others, ...chartsAndMaps, ...uiElements, ...formAndTable]
export default [...apps]
