users=assets/medias/*

rm -r assets/thumbnails
mkdir assets/thumbnails

for u in $users
do
  u=$(echo $u | cut -d '/' -f 3)
  mkdir "assets/thumbnails/$u"

  # Creation des miniatures
  files=$(echo assets/medias/$u/*.jpg)

  for f in $files
  do
    ffmpeg -i $f -vf scale=-1:$1 -qscale:v 2 assets/thumbnails/$u/${f##*/}
  done

  # Creation des vidéos optimisés
  files=$(echo assets/medias/$u/*.mp4)

  for f in $files
  do
    ffmpeg -i $f -vf scale=-2:$1 assets/thumbnails/$u/${f##*/}
  done
done

printf "\nGénération des miniatures terminé"
