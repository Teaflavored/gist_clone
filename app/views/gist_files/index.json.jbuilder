json.array!(@gist_files) do |gist_file|
  json.partial!("gist_files/gist_file", gist_file: gist_file)
end
