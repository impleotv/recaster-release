
<div align="center">
  <a >
    <img src="images/impleo_logo.png" alt="Logo" >
  </a>
</div>

# Recaster

![Recaster](images/recaster-main-mid.jpg)  


## System Requirements

OS: Linux, Windows


## Direct Download link

|          | Version             | Download link                                                           | 
|:---------|:-------------------:|:------------------------------------------------------------------------|
| **Recaster for Windows (7z)** |  v2.7.2 | [recaster-install-win.7z](https://github.com/impleotv/recaster-release/releases/download/v2.7.2/recaster-install-win.7z)  | 
| **Recaster for Linux (tar.gz)** |  v2.7.2 | [recaster-install-linux.tar.gz](https://github.com/impleotv/recaster-release/releases/download/v2.7.2/recaster-install-linux.tar.gz)  | 

*Released on Sun, 25 Feb 2024, 18:02 GMT+2*


The installation and configuration instructions can be found [here](https://impleotv.com/content/recaster/help/).

> Note: To enable video preview functionality, GStreamer must be installed. The Docker image includes GStreamer pre-installed, eliminating the need for additional installations.

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
    impleo/recaster:v2.7.2
```

More info [here](https://impleotv.com/content/recaster/help/user-guide/running-docker.html)

## Known issues:

Some antivirus programs generate false positive reports (for Windows) on the Stanag2WebRtc.eve executable, compiled in Golang.  
More info on that [Why does my virus-scanning software think my Go distribution or compiled binary is infected?](https://go.dev/doc/faq#virus)  
There is very little that we can do about it...

----  
*Please don't hesitate to contact us at support@impleotv.com should you have any question.*
