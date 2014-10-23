import webapp2
import os
from google.appengine.ext.webapp import template


class MainHandler(webapp2.RequestHandler):
  def get(self):
    template_values = {
      'name': "World",
    }

    path = os.path.join(os.path.dirname(__file__), 'index.html')
    self.response.out.write(template.render(path, template_values))
    
class RTHandler(webapp2.RequestHandler):
  def get(self):
   # name = self.request.get('name')
    template_values = {
      'name': 'name',
    }

    path = os.path.join(os.path.dirname(__file__), 'runtime.html')
    self.response.out.write(template.render(path, template_values))
    
class SettingsHandler(webapp2.RequestHandler):
  def get(self):
    
    template_values = {
      'name': "Settings",
    }

    path = os.path.join(os.path.dirname(__file__), 'settings.html')
    self.response.out.write(template.render(path, template_values))


app = webapp2.WSGIApplication([
  ('/app/rt/.*', RTHandler),('/app/settings/.*', SettingsHandler),('/.*', MainHandler),
], debug=True)