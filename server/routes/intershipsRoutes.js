router.get("/internships", getInternships);
router.get("/internships/:id", getInternshipById);
router.post("/internships", createInternship);
router.put("/internships/:id", updateInternship);
router.delete("/internships/:id", deleteInternship);


router.get("/users/:id", getUserId);