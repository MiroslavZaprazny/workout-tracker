package main

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/controllers"
	"github.com/MiroslavZaprazny/workout-tracker/api/initializers"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariable()
	initializers.ConnectToDB()
}

func main() {
	r := gin.Default()
	r.GET("/workouts/user/:id", controllers.WorkoutIndex)

	r.Run()
}