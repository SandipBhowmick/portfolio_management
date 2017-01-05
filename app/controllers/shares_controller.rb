class SharesController < ApplicationController

layout "admin"

  def index
  	@shares= Share.sorted
  end

  
  def new
  	@share = Share.new()
  end

  def create
  	@share = Share.new(share_params)
  	if @share.save 
  		flash[:notice]= "Transaction details saved successfully"
  		redirect_to(shares_path)
  	else
  		render(new_share_path)
  	end
  end

  def edit
  	@share = Share.find(params[:id])
  end

  def update
  	@share = Share.find(params[:id])
  		if @share.update_attributes(share_params)
  			flash[:notice]= "Transection details updated successfully"
  			redirect_to(shares_path(:id))
  		else
  			render(edit_share_path(:id))
  		end
  end

  
  def destroy

  	share = Share.find(params[:id]).destroy
  	flash[:notice]=" Transaction on '#{share.scrip_name}' dated '#{share.transaction_date}' destroy successfully"
  	 
    redirect_to(shares_path)
  end


private
  def share_params
  	params.require(:share).permit(:scrip_name, :transaction_date, :buy_sell, :quantity, :rate, :brokerage, :net_rate, :net_value, :bank_balance, :demat_balance, :user_id )
  end

end
