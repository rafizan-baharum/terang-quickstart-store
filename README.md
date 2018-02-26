# terang-quickstart-store
TERANG Quickstart store


# swagger
http://<host>:8080/dmasjid/swagger-ui.html


#login
curl dmasjid-client:XY7kmzoNzl100@159.65.3.103:8080/dmasjid/oauth/token -d grant_type=password -d username=root -d password=abc123 > login.json

#api call
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZG1hc2ppZC1qd3RyZXNvdXJjZWlkIl0sInVzZXJfbmFtZSI6InJvb3QiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTE5Mzk3MjQ0LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiLCJST0xFX0FETUlOIl0sImp0aSI6IjllODM2NWFiLWFkZDUtNDNiMS1iZDU3LTcyMmUxNmE1OGUwMyIsImNsaWVudF9pZCI6ImRtYXNqaWQtY2xpZW50In0.FNbUxAi5JHZwsOrJ5apYNewdQruo8YGgcl-gXMKh_WY" http://159.65.3.103:8080/dmasjid/api/common/programCodes  > programCodes.json
