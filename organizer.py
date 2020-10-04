
import requests



def urlParser(appid, apikey, pagesize, pagenum, category, donor, scope, gov):
    app_id = "?app_id=" + appid
    app_key = "&app_key=" + apikey
    pagesize = "&pageSize="+ pagesize
    pagenum = "&pageNum=" + pagenum
    search = "&search=" + category
    rated = "&rated=" + "true"
    fundraisingOrgs = "&fundraisingOrgs=" + "true"
    donorPrivacy = "&donorPrivacy=" +    donor
    scopeOfWork = "&scopeOfWork=" + scope
    noGovSupport = "&noGovSupport=" + gov

    dataurl = "https://api.data.charitynavigator.org/v2/Organizations" + app_id + app_key+ pagesize + pagenum + search + rated + fundraisingOrgs + donorPrivacy + scopeOfWork + noGovSupport
    print(dataurl)
    return dataurl


def main(url):
    response = requests.get(url)
    print(response)
    response.encoding = 'utf-8'
    data = response.json()
    return data

apikey = "9108f67496a93720612916af4fa5a734"
apiid = "ad182320"
pagesize = "3"
pagenum = "4"
category = "Animals"
donor = "true"
scope = "REGIONAL"
gov = "true"

staticJson = "https://charitynavigator.github.io/api/CharityNavigatorAPI/generated/Swagger/CharityNavigatorDataAPI.json"
categories = ["Animals", "Arts, Culture, Humanities", "Community Development", "Education", "Environment", "Health", "Human and Civil Rights", "Human Services", "International", "Research and Public Policy", "Religion"]
#staticJson = main(staticJson)
staticJson = main(urlParser(apiid, apikey, pagesize, pagenum, categories[3], donor, scope, gov))


for org in staticJson:
    print(org["charityName"])
print(staticJson[0]["mailingAddress"])
