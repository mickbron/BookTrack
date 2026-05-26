"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  getDashboardStats: () => electron.ipcRenderer.invoke("dashboard:stats"),
  getLivres: () => electron.ipcRenderer.invoke("livres:get"),
  addLivre: (titre, description, disponible, auteurId) => electron.ipcRenderer.invoke("livres:add", titre, description, disponible, auteurId),
  updateLivre: (id, titre, description, disponible, auteurId) => electron.ipcRenderer.invoke("livres:update", id, titre, description, disponible, auteurId),
  deleteLivre: (id) => electron.ipcRenderer.invoke("livres:delete", id),
  getAuteurs: () => electron.ipcRenderer.invoke("auteurs:get"),
  addAuteur: (nom, biographie) => electron.ipcRenderer.invoke("auteurs:add", nom, biographie),
  updateAuteur: (id, nom, biographie) => electron.ipcRenderer.invoke("auteurs:update", id, nom, biographie),
  deleteAuteur: (id) => electron.ipcRenderer.invoke("auteurs:delete", id),
  getCategories: () => electron.ipcRenderer.invoke("categories:get"),
  addCategorie: (nom) => electron.ipcRenderer.invoke("categories:add", nom),
  updateCategorie: (id, nom) => electron.ipcRenderer.invoke("categories:update", id, nom),
  deleteCategorie: (id) => electron.ipcRenderer.invoke("categories:delete", id),
  setLivreCategories: (livreId, categorieIds) => electron.ipcRenderer.invoke("livres:set-categories", livreId, categorieIds),
  getUtilisateurs: () => electron.ipcRenderer.invoke("utilisateurs:get"),
  addUtilisateur: (nom, email) => electron.ipcRenderer.invoke("utilisateurs:add", nom, email),
  getEmprunts: () => electron.ipcRenderer.invoke("emprunts:get"),
  addEmprunt: (utilisateurId, livreId) => electron.ipcRenderer.invoke("emprunts:add", utilisateurId, livreId),
  returnEmprunt: (id) => electron.ipcRenderer.invoke("emprunts:return", id),
  deleteEmprunt: (id) => electron.ipcRenderer.invoke("emprunts:delete", id),
  getAvis: () => electron.ipcRenderer.invoke("avis:get"),
  addAvis: (note, commentaire, utilisateurId, livreId) => electron.ipcRenderer.invoke("avis:add", note, commentaire, utilisateurId, livreId),
  updateAvis: (id, note, commentaire) => electron.ipcRenderer.invoke("avis:update", id, note, commentaire),
  deleteAvis: (id) => electron.ipcRenderer.invoke("avis:delete", id)
});
