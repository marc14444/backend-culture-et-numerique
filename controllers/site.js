
import SiteTouristique from "./../models/site.js"
import Users from "../models/users.js";
import express from "express"
// import { hash, compare, genSalt } from "bcrypt"

//d'abodr creer une class pour tous les elements du controllers

class SiteTouristiqueControllers {

    //creer un article
    static async createSiteTouristique(req, res) {
        try {
            const {_id} = req.user
           
            const { name, ...body } = req.body;
            let user = await Users.findById(_id)
            console.log(user)
            if(!user){
                res.status(400).json({status:false, message:"Uitlisateur introuvable !!"})
                return
            }
            const exist = await SiteTouristique.findOne({name})
            if (exist) {
                return res.status(404).json({ statut: false, message: "Cet SiteTouristique existe" })
            }
    
            const articles = await SiteTouristique.create({
                userId:user._id, 
                name,
                ...body
            })
            res.status(200).json({ statut: true, message: articles })
        } catch (error) {
            res.status(500).json({ statut:false, message: error.message})
        }
       
    }// Supprimer un article
    static async deleteSiteTouristique(req, res) {
      const _id  = req.params.id;
      console.log(req.params)
      const user = await SiteTouristique.findById(_id)
      if (!SiteTouristique) {
          return res.status(400).json({ statut: false, message: "Ce SiteTouristique n'existe pas" })
      }
      const deleteSiteTouristique = await SiteTouristique.deleteOne({ _id })
      if (!deleteSiteTouristique) {
          return res.status(400).json({ statut: false, message: "Erreur lors de la supression" })
      }
      res.status(204).json({ statut: true, message: "supprimé avec succès" })
       
  }
  
  // Modifier un article
  static async updateSiteTouristique(req, res) {
    const _id = req.params.id
    const user = await SiteTouristique.findById(_id)
    const { ...body } = req.body
    if (!SiteTouristique) {
        return res.status(400).json({ statut: false, message: "Ce SiteTouristique n'existe pas" })
    }

    const updateSiteTouristique = await SiteTouristique.updateOne({ _id }, { ...body })

    if (!updateSiteTouristique) {
        return res.status(400).json({ statut: false, message: "Erreur lors de la creation" })
    }

    res.status(201).json({ statut: true, message: "Bien modifié !!!" })
}
  
  // Récupérer un article

  static async getSiteTouristique(req, res) {
    const _id = req.params.id

    const user = await SiteTouristique.findById(_id)
    if (!SiteTouristique) {
        return res.status(400).json({ statut: false, message: "Erreur lors de la recuperation" })
    }

    res.status(200).json({ statut: true, message: SiteTouristique })
   
}


/*   
  static async getSiteTouristique(req, res) {
    const id = req.params.id;
  
    // Rechercher l'article en une seule requête à la base de données
    const article = await SiteTouristique.findOne(id);
  
    if (!article) {
      return res.status(400).json({ statut: false, message: "Cet article n'existe pas" });
    }
  
    res.status(200).json({ statut: true, message: article });
  } */
  
  // Récupérer tous les articles
  static async getAll(req, res) {
    // Rechercher tous les articles en une seule requête à la base de données
    const articles = await SiteTouristique.find();
  
    if (!articles) {
      return res.status(404).json({ statut: false, message: "Aucun article trouvé" });
    }
  
    res.status(201).json({ statut: true, message: articles });
  }
}
export default SiteTouristiqueControllers