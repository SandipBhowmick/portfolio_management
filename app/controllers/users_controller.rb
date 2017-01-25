class UsersController < ApplicationController

layout "admin"

def index
	@users = User.order("user_name asc").all
end

def show
	@user = User.find(params[:id])
end

def new

end

def create

end

def edit

end

def update

end

def destroy

end


end
