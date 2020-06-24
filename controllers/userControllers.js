export const join=(req, res)=>{res.render("join", {pageTitle:"Home"})};
export const login=(req, res)=>{res.render("login", {pageTitle:"Home"})};
export const logout=(req, res)=>{res.render("logout", {pageTitle:"Home"})};
export const user=(req, res)=>{res.render('user', {pageTitle:"Home"})};
export const userDetail=(req, res)=>{res.render('userDetail', {pageTitle:"Home"})};
export const editProfile=(req, res)=>{res.render('editProfile', {pageTitle:"Home"})};
export const changePassword=(req, res)=>{res.render('changePassword', {pageTitle:"Home"})};