package controllers

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/requests"
	"github.com/MiroslavZaprazny/workout-tracker/api/response"
	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	response.SetReponseHeaders(c)

	messages := requests.StoreUserRequest(c)

	if len(messages) != 0 {
	 c.JSON(200, gin.H{
			"messages": messages,
		})
    return
	}

		c.JSON(200, gin.H{
			"message": "All good",
		})
}
