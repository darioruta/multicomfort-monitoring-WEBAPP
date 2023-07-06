import cherrypy
import requests
import random
import time
import jwt
import json

from io import BytesIO
from PIL import Image

class webServer():

	exposed = True

	def __init__(self):
		self.secret_key = "chiave"
		self.utenti = {"utenti": [{"username":"dario","password":"dr", "localityID": 3 , "plessoID": [1,2] }]}
		
		self.cloud="e641-2001-b07-a3d-b8b4-9280-7191-76bf-46b.ngrok-free.app" #TO CHANGE
		self.localityID = 3
		self.filter = "5m"
	def GET (self, *uri, **params):

		if len(uri)==0:
			#PING HERE THE SERVICE CATALOGUE TO DISCOVER CLOUD IP ADDRESS
			# res = json.loads(r.get(service_catalogue_ip_add/cloud))
			# self.cloud = res["cloud"]
			return open("index.html")
		else:
			if uri[0]=="areaPersonale":
				try:
					incoming_cookie = cherrypy.request.cookie
					token = incoming_cookie["sessionID"].value
					decode_token = jwt.decode(token, self.secret_key, algorithms=["HS256"])
					return open("areaPersonale.html")
				except:
					return open("login.html")
				
			elif uri[0]=="logout":
				try:
					incoming_cookie = cherrypy.request.cookie
					token = incoming_cookie["sessionID"].value
					cookie = cherrypy.response.cookie #manda i cookie al browser
					cookie['sessionID'] = token
					cookie['sessionID']['path'] = '/'
					cookie['sessionID']['max-age'] = 0
					cookie['sessionID']['version'] = 1
					out= {"canceled": "true"}
					return json.dumps(out)
				except:
					out= {"canceled": "false"}
					return json.dumps(out)
				
				
			
		if uri[0]=="data":
			if uri[1]=="allKits":
			
				try:
					utente = self.getUserData()
					if utente == None: return open("login.html")
					plessiID = utente["plessoID"]
					localityID = utente["localityID"]

					r=requests.get(f'http://{self.cloud}/{localityID}/kits/allonlineIDs')
					
					json_prova = r.json()
					
					print(json_prova["KitsIDs"])
					r_final = [k for k in json_prova["KitsIDs"] if k["plessoID"] in plessiID]

					print(f"\n\n\n{r_final}")
					out = {"KitsIDs": r_final}
					return json.dumps(out)
				except:
					return open("login.html")
		
			elif uri[1]=="cards":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				
				kit=str(params["id_kit"])
			
				r=requests.get(f'http://{self.cloud}/{localityID}/history/cards?id_kit={kit}&fields[]=a&fields[]=b&fields[]=c&fields[]=d&fields[]=e&fields[]=f&fields[]=g&fields[]=h')
			
				return r.text
			elif uri[1]=="overall_section":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				
				kit=str(params["id_kit"])
				
				r=requests.get(f'http://{self.cloud}/{localityID}/history/cards?id_kit={kit}&fields[]=j&fields[]=k&fields[]=l&fields[]=m&fields[]=i')
				return r.text
			elif uri[1]=="co2":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit=str(params["id_kit"])
				filter = str(params["filter"])
				
				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=d&rs=-{self.filter}')
				return r.text
			elif uri[1]=="co2out":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit=str(params["id_kit"])
				r=requests.get(f'http://{self.cloud}/{localityID}/history/cards?id_kit={kit}&fields[]=t')
				print("\n\n\nCO2 OUT RANGE:" + r.text)
				return r.text
			elif uri[1]=="pm10":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit=str(params["id_kit"])
				filter = str(params["filter"])
				
				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=c&rs=-{self.filter}')
				return r.text
			elif uri[1]=="userdata":
				incoming_cookie = cherrypy.request.cookie
				token = incoming_cookie["sessionID"].value
				decode_token = jwt.decode(token, self.secret_key, algorithms=["HS256"])
				print(decode_token["user_data"])
				return json.dumps(decode_token["user_data"])
			elif uri[1]=="thermal": 
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				
				r=requests.get(f'http://{self.cloud}/{localityID}/history/cards?id_kit={kit}&fields[]=n&fields[]=o&fields[]=p&fields[]=v&fields[]=x')
				return r.text
			elif uri[1]=="noise":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				
				r=requests.get(f'http://{self.cloud}/{localityID}/history/cards?id_kit={kit}&fields[]=f&fields[]=u')
				return r.text
			elif uri[1]=="lux":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				
				r=requests.get(f'http://{self.cloud}/{localityID}/history/cards?id_kit={kit}&fields[]=s&fields[]=r')
				return r.text
			elif uri[1]=="history" and uri[2]=="pmv":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				
				filter = str(params["filter"])
				
				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=o&rs=-{self.filter}')
				return r.text	
			elif uri[1]=="history" and uri[2]=="temperature":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				filter = str(params["filter"])
			

				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=a&rs=-{filter}')

				return r.text	
			elif uri[1]=="history" and uri[2]=="mrt":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				filter = str(params["filter"])
				

				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=h&rs=-{filter}')
				
				return r.text
			elif uri[1]=="history" and uri[2]=="db":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				filter = str(params["filter"])
		
				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=f&rs=-{self.filter}')
				
				return r.text
			elif uri[1]=="history" and uri[2]=="lux":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				filter = str(params["filter"])
			

				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=g&rs=-{self.filter}')
				
				return r.text		
			elif uri[1]=="history" and uri[2]=="airSpeed":
				utente = self.getUserData()
				if utente == None: return open("login.html")
				plessiID = utente["plessoID"]
				localityID = utente["localityID"]
				kit = str(params["id_kit"])
				filter = str(params["filter"])
			

				r=requests.get(f'http://{self.cloud}/{localityID}/history/data?id_kit={kit}&fields[]=e&rs=-{self.filter}')
				
				return r.text

			return


	def POST(self, *uri, **params):
		if uri[0]=="login":
			body=cherrypy.request.body.read()
			dict_body=json.loads(body)
			print(str(dict_body))
			if not dict_body:
				raise cherrypy.HTTPError(400, "Bad Request")
			else:
				username = dict_body["username"]
				password = dict_body["password"]
				esito = self.check_user(username, password) 
				if esito:
					cookie = cherrypy.response.cookie 
					token = self.generate_token(username, 600)
					print(token)
					cookie['sessionID'] = token
					cookie['sessionID']['path'] = '/'
					cookie['sessionID']['max-age'] = 600
					cookie['sessionID']['version'] = 1
					print("\ntoken generato e inviato al browser\n")
					out= {"verified": "true", "username": str(username)}
					return json.dumps(out)
				else:
					print(f"esito {esito}: password o username errati")
					#password immessa è sbagliata
					out= {"verified": "false"}
					return json.dumps(out)
					

		return 
	
	def PUT(self, *uri, **params):
		return None
	

	def check_user(self, username, password):
	
		for user in self.utenti["utenti"]:
			if (user["username"] == str(username) ) and (user["password"]==str(password)) :	
				return True

		return	False
	
	def generate_token(self, username, expiration):
		user_data = {"username": str(username)}
		payload = {
			"user_data": user_data,
			"exp": time.time() + expiration
		}
		token = jwt.encode(payload, self.secret_key, algorithm="HS256")
		return token
	

	def getUserData(self):
		incoming_cookie = cherrypy.request.cookie
		token = incoming_cookie["sessionID"].value
		decode_token = jwt.decode(token, self.secret_key, algorithms=["HS256"])
		username = decode_token["user_data"]["username"]
		utenti = [u for u in  self.utenti["utenti"] if u["username"] ==username]
		if utenti == [] or len(utenti)>1: return None

		return utenti[0]
	
	def trasformaFilter(self,filter):
		if (filter == "day"):
			return "1d"
		elif (filter == "72"):
			return "3d"
		elif (filter == "week"):
			return "7d"
		elif (filter == "all"):
			return "30d"
		

