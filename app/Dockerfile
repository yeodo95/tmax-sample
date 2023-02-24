FROM prolinux8:withjdk8
ARG JAR_FILE=./target/*.war
COPY ${JAR_FILE} app.war
COPY ./agent.java /agent.java

ENTRYPOINT ["java", "-Xms128m", "-Xmx256m" ,"-Djava.security.egd=file:/dev/./urandom","-Duser.timezone=Asia/Seoul", "-Dfile.encoding=UTF-8", "-Dspring.profiles.active=dev", "-javaagent:/agent.java/scouter.agent.jar", "-Dscouter.config=/agent.java/conf/scouter.conf", "-Dobj_name=WAS-01", "-jar","/app.war"]
