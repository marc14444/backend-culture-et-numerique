// Importe la classe userControllers
import userControllers from "../controllers/users.js";

// Crée un identifiant par défaut
const admin = await userControllers.createUser({
  email: "admin@gmail.com",
  motDePasse: "admin",
});

// Route pour les admins
app.get("/admin", (req, res) => {
  // Vérifie si l'utilisateur est connecté
  if (!req.session.user) {
    return res.status(401).json({ status: false, message: "Utilisateur non connecté" });
  }

  // Vérifie si l'utilisateur est admin
  const userId = req.session.user;
  const user = UserModel.findOne({ _id: userId });

  if (!user.admin) {
    return res.status(403).json({ status: false, message: "Accès interdit" });
  }

  // Renvoie la page des admins
  res.render("admin");
});

// Modifie la méthode login()
userControllers.login = async (req, res) => {

  // Si l'utilisateur est admin, redirige vers la page des admins
  if (user.admin) {
    res.redirect("/admin");
    return;
  }
};



