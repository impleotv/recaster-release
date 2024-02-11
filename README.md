
<div align="center">
  <a >
    <img src="images/impleo_logo.png" alt="Logo" >
  </a>
</div>

# Recaster

![Recaster](images/recaster-main-sm.png)  


## System Requirements

OS: Linux, Windows


## Direct Download link

|          | Version             | Download link                                                           | 
|:---------|:-------------------:|:------------------------------------------------------------------------|
| **Recaster (7z)** |  v2.6.2 | [recaster-install.7z](https://github.com/impleotv/recaster-release/releases/download/v2.6.2/recaster-install.7z)  | 
| **Recaster (tar.gz)** |  v2.6.2 | [recaster-install.tar.gz](https://github.com/impleotv/recaster-release/releases/download/v2.6.2/recaster-install.tar.gz)  | 

*Released on Sun, 11 Feb, 10:30 GMT+2*


The installation and configuration instructions can be found [here](https://impleotv.com/content/recaster/help/).



## Docker

Use the docker-compose.yml file that accompanies the release, or use the following command to run the Docker image:

```sh
docker run -d \
    --name recaster \
    --restart always \
    -e PORT=5000 \  
    -v $(pwd)/data/:/recaster/data/ \
    -v recasterdb:/recaster/db/ \
    -v recasterlic:/recaster/licenses/ \
    --network host \
    impleo/recaster:v2.6.2
```

More info [here](https://impleotv.com/content/recaster/help/user-guide/running-docker.html)


----  
*Please don't hesitate to contact us at support@impleotv.com should you have any question.*
