import cherrypy
import os
from webserver import *



if __name__ == '__main__':
	
		
	conf={
		'/':{
				'request.dispatch':cherrypy.dispatch.MethodDispatcher(),
				'tools.staticdir.root': os.path.abspath(os.getcwd()),
			},
		 '/css':{
		 'tools.staticdir.on': True,
		 'tools.staticdir.dir':'css'
		 },
		 '/js':{
		 'tools.staticdir.on': True,
		 'tools.staticdir.dir':'js'
		 },
          '/images':{
		 'tools.staticdir.on': True,
		 'tools.staticdir.dir':'images'
		 },
          '/fonts':{
		 'tools.staticdir.on': True,
		 'tools.staticdir.dir':'fonts'
		 },
	}
	
	#cherrypy.config.update({"server.socket_host": '0.0.0.0'})
	cherrypy.tree.mount(webServer(),'/',conf)
	cherrypy.engine.start()
	cherrypy.engine.block()