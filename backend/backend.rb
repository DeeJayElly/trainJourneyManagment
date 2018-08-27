require 'sinatra'

def random_id
  result = ""

  (0...16).each do
    result = result + ('a'...'z').to_a.sample
  end

  result
end

$passengers = [
  { firstName: "Joe", lastName: "Smith", email: "joe@example.com", id: random_id, },
  { firstName: "Jane", lastName: "Smith", email: "jane@example.com", id: random_id, },
]

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get "/passengers" do
    $passengers.to_json
end

get "/add_passenger" do
  if $passengers.count >= 5
    return "error"
  end

  $passengers << {
    firstName: params[:firstName],
    lastName: params[:lastName],
    email: params[:email],
    id: random_id
  }
  "ok"
end

get "/remove_passenger" do
  $passengers.reject! { |x| x[:id] == params[:id] }
  "ok"
end
