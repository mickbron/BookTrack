import { contextBridge, ipcRenderer } from 'electron';


/**
 * API exposée au renderer Angular.
 * Elle sert de pont sécurisé entre Angular et le Main Process Electron.
 */
contextBridge.exposeInMainWorld('api', {

  getDashboardStats: () =>
    ipcRenderer.invoke('dashboard:stats'),

  getLivres: () => ipcRenderer.invoke('livres:get'),

  addLivre: (titre: string, description: string, disponible: boolean, auteurId: number) =>
    ipcRenderer.invoke('livres:add', titre, description, disponible, auteurId),

  updateLivre: (id: number, titre: string, description: string, disponible: boolean, auteurId: number) =>
    ipcRenderer.invoke('livres:update', id, titre, description, disponible, auteurId),

  deleteLivre: (id: number) =>
    ipcRenderer.invoke('livres:delete', id),

  getAuteurs: () =>
    ipcRenderer.invoke('auteurs:get'),

  addAuteur: (nom: string, biographie: string) =>
    ipcRenderer.invoke('auteurs:add', nom, biographie),

  updateAuteur: (id: number, nom: string, biographie: string) =>
    ipcRenderer.invoke('auteurs:update', id, nom, biographie),

  deleteAuteur: (id: number) =>
    ipcRenderer.invoke('auteurs:delete', id),

  getCategories: () =>
    ipcRenderer.invoke('categories:get'),

  addCategorie: (nom: string) =>
    ipcRenderer.invoke('categories:add', nom),

  updateCategorie: (id: number, nom: string) =>
    ipcRenderer.invoke('categories:update', id, nom),

  deleteCategorie: (id: number) =>
    ipcRenderer.invoke('categories:delete', id),

  setLivreCategories: (livreId: number, categorieIds: number[]) =>
    ipcRenderer.invoke('livres:set-categories', livreId, categorieIds),

  getUtilisateurs: () =>
    ipcRenderer.invoke('utilisateurs:get'),

  addUtilisateur: (nom: string, email: string) =>
    ipcRenderer.invoke('utilisateurs:add', nom, email),

  getEmprunts: () =>
    ipcRenderer.invoke('emprunts:get'),

  addEmprunt: (utilisateurId: number, livreId: number) =>
    ipcRenderer.invoke('emprunts:add', utilisateurId, livreId),

  returnEmprunt: (id: number) =>
    ipcRenderer.invoke('emprunts:return', id),

  deleteEmprunt: (id: number) =>
    ipcRenderer.invoke('emprunts:delete', id),

  getAvis: () =>
    ipcRenderer.invoke('avis:get'),

  addAvis: (note: number, commentaire: string, utilisateurId: number, livreId: number) =>
    ipcRenderer.invoke('avis:add', note, commentaire, utilisateurId, livreId),

  updateAvis: (id: number, note: number, commentaire: string) =>
    ipcRenderer.invoke('avis:update', id, note, commentaire),

  deleteAvis: (id: number) =>
    ipcRenderer.invoke('avis:delete', id),

});