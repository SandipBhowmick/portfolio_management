class EquitysController < ApplicationController
=begin

	require 'json'


	def index
		@equitys = Equity.all
		@equitys_m =@equitys.pluck(:code, :name)
		respond_to do |format|
			format.html 
			format.json {render json: JSON.parse(@equitys_m)}
		end
		
	end

	
private
  def equity_params
     	params.require(:equity).permit(:name, :code)
  end
=end

end
